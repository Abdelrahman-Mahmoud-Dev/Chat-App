<template>
  <div class="chat box">
    <div class="chat-history" ref="container">
      <div
        v-if="!docs || docs.length == 0"
        class="box is-flex is-align-items-center is-justify-content-center"
      >
        <span>No message yet</span>
      </div>
      <ul>
        <li v-for="doc in docs" :key="doc.id">
          <div
            class="media is-flex is-flex-direction-column"
            v-if="doc.name == userName.displayName"
          >
            <div class="media-left message-data">
              <span class="message-data-name"
                ><i class="fa fa-circle online"></i> {{ doc.name }}</span
              >
              <span class="message-data-time">{{ doc.createdAt }}</span>
            </div>
            <div class="media-left message my-message align-left">
              {{ doc.message }}
            </div>
          </div>
          <div v-else class="media is-flex is-flex-direction-column">
            <div class="message-data media-right is-align-self-flex-end">
              <span class="message-data-time">
                {{ doc.createdAt }}
              </span>
              &nbsp; &nbsp;
              <span class="message-data-name"> {{ doc.name }}</span>
              <i class="fa fa-circle me"></i>
            </div>
            <div
              class="
                media-right
                message
                other-message
                is-align-self-flex-end
                align-left
              "
            >
              {{ doc.message }}
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- end chat-history -->

    <div class="chat-message">
      <textarea
        @keypress.enter.prevent="sendMessage"
        name="message-to-send"
        id="message-to-send"
        placeholder="Type your message"
        v-model="message"
      ></textarea>

      <button @click="sendMessage" class="btn-send">Send</button>
    </div>
  </div>
</template>

<script>
import useCollection from "@/composables/useCollection.js";
import { projectAuth, timestamp } from "@/firebase/config.js";
import { ref, onUpdated } from "vue";
import getCollection from "@/composables/getCollection";

export default {
  setup() {
    const { addDoc, error } = useCollection("messages");
    const { docs } = getCollection("messages");
    const message = ref("");
    const container = ref(null);
    const userName = ref(projectAuth.currentUser);
    function sendMessage() {
      let messageDetails = {
        name: userName.value.displayName,
        message: message.value.trim(),
        createdAt: timestamp(),
      };
      addDoc(messageDetails);
      message.value = "";
      message.value = message.value.trim();
    }
    onUpdated(() => {
      container.value.scrollTop = container.value.scrollHeight;
    });
    return {
      addDoc,
      error,
      sendMessage,
      message,
      docs,
      userName,
      container,
    };
  },
};
</script>


<style scoped lang="scss" >
@import url(https://fonts.googleapis.com/css?family=Lato:400,700);

$green: #86bb71;
$blue: #94c2ed;
$orange: #e38968;
$gray: #92959e;

.people-list {
  width: 260px;
  float: left;

  .search {
    padding: 20px;
  }

  input {
    border-radius: 3px;
    border: none;
    padding: 14px;
    color: white;
    background: #6a6c75;
    width: 90%;
    font-size: 14px;
  }

  .fa-search {
    position: relative;
    left: -25px;
  }

  ul {
    padding: 20px;
    height: 770px;

    li {
      padding-bottom: 20px;
    }
  }

  img {
    float: left;
  }

  .about {
    float: left;
    margin-top: 8px;
  }

  .about {
    padding-left: 8px;
  }

  .status {
    color: $gray;
  }
}

.chat {
  .chat-header {
    padding: 20px;
    border-bottom: 2px solid white;

    img {
      float: left;
    }

    .chat-about {
      float: left;
      padding-left: 10px;
      margin-top: 6px;
    }

    .chat-with {
      font-weight: bold;
      font-size: 16px;
    }

    .chat-num-messages {
      color: $gray;
    }

    .fa-star {
      float: right;
      color: #d8dadf;
      font-size: 20px;
      margin-top: 12px;
    }
  }

  .chat-history {
    padding: 30px 30px 20px;
    border-bottom: 2px solid white;
    overflow-y: scroll;
    height: 500px;
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      background-color: #ccc;
      border-radius: 10px;
      box-shadow: 0 0 10 rgb(34, 32, 32) inset;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(4, 246, 64, 0.116);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgb(4, 246, 65);
    }
    .message-data {
      margin-bottom: 15px;
    }

    .message-data-time {
      color: lighten($gray, 8%);
      padding-left: 6px;
    }

    .message {
      color: white;
      padding: 18px 20px;
      line-height: 26px;
      font-size: 16px;
      border-radius: 7px;
      margin-bottom: 30px;
      width: 90%;
      position: relative;

      &:after {
        bottom: 100%;
        left: 7%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-bottom-color: $green;
        border-width: 10px;
        margin-left: -10px;
      }
    }

    .my-message {
      background: $green;
    }

    .other-message {
      background: $blue;

      &:after {
        border-bottom-color: $blue;
        left: 93%;
      }
    }
  }

  .chat-message {
    padding: 30px;
    text-align: center;

    textarea {
      width: 100%;
      max-width: 100%;
      border: 1px solid rgb(4, 246, 65);
      padding: 10px;
      font-family: inherit;
      margin-bottom: 10px;
      border-radius: 5px;
      resize: none;

      outline: none;
      font-size: inherit;
    }

    .fa-file-o,
    .fa-file-image-o {
      font-size: 16px;
      color: gray;
      cursor: pointer;
    }

    .btn-send {
      float: right;
      color: rgb(4, 246, 65);
      font-size: 16px;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      font-weight: bold;
      background: #f2f8f3;

      &:hover {
        color: #000;
      }
    }
  }
}

.online,
.offline {
  margin-right: 3px;
  font-size: 10px;
}
.me {
  font-size: 10px;
  margin-left: 3px;
}
.online {
  color: $green;
}

.offline {
  color: $orange;
}

.me {
  color: $blue;
}

.align-left {
  text-align: left;
}

.align-right {
  text-align: right;
}

.float-right {
  float: right;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
</style>


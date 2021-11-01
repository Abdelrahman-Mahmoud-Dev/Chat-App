<template>
  <div class="container clearfix">
    <div class="chat">
      <div class="chat-header clearfix">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
          alt="avatar"
        />

        <div class="chat-about">
          <div class="chat-with">Chat with Vincent Porter</div>
          <div class="chat-num-messages">already 1 902 messages</div>
        </div>
        <i class="fa fa-star"></i>
      </div>
      <!-- end chat-header -->

      <div class="chat-history">
        <ul>
          <li>
            <div class="message-data">
              <span class="message-data-name"
                ><i class="fa fa-circle online"></i> Vincent</span
              >
              <span class="message-data-time">10:12 AM, Today</span>
            </div>
            <div class="message my-message">
              Are we meeting today? Project has been already finished and I have
              results to show you.
            </div>
          </li>

          <li class="clearfix">
            <div class="message-data align-right">
              <span class="message-data-time">10:14 AM, Today</span> &nbsp;
              &nbsp; <span class="message-data-name">Olia</span>
              <i class="fa fa-circle me"></i>
            </div>
            <div class="message other-message float-right">
              Well I am not sure. The rest of the team is not here yet. Maybe in
              an hour or so? Have you faced any problems at the last phase of
              the project?
            </div>
          </li>
        </ul>
      </div>
      <!-- end chat-history -->

      <div class="chat-message clearfix">
        <textarea
          name="message-to-send"
          id="message-to-send"
          placeholder="Type your message"
          rows="3"
        ></textarea>

        <button>Send</button>
      </div>
      <!-- end chat-message -->
    </div>
    <!-- end chat -->
  </div>
  <!-- end container -->
</template>



<style scoped lang="scss" >
@import url(https://fonts.googleapis.com/css?family=Lato:400,700);

$green: #86bb71;
$blue: #94c2ed;
$orange: #e38968;
$gray: #92959e;

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  background: #c5ddeb;
  font: 14px/20px "Lato", Arial, sans-serif;
  padding: 40px 0;
  color: white;
}

.container {
  margin: 0 auto;
  width: 750px;
  background: #444753;
  border-radius: 5px;
}

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
  width: 490px;
  float: left;
  background: #f2f5f8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  color: #434651;

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
    height: 575px;

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

    textarea {
      width: 100%;
      border: none;
      padding: 10px 20px;
      font: 14px/22px "Lato", Arial, sans-serif;
      margin-bottom: 10px;
      border-radius: 5px;
      resize: none;
    }

    .fa-file-o,
    .fa-file-image-o {
      font-size: 16px;
      color: gray;
      cursor: pointer;
    }

    button {
      float: right;
      color: $blue;
      font-size: 16px;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      font-weight: bold;
      background: #f2f5f8;

      &:hover {
        color: darken($blue, 7%);
      }
    }
  }
}

.online,
.offline,
.me {
  margin-right: 3px;
  font-size: 10px;
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

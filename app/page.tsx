"use client";
import Room from "../components/Room";
import Chat from "../components/Chat";
import React from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Home() {
  const [username, setUsername] = React.useState("");
  const [room, setRoom] = React.useState("");
  const [chatScreen, setChatScreen] = React.useState(false);
  return (
    <React.Fragment>
      {chatScreen ? (
        <Chat
          username={username}
          room={room}
          socket={socket}
        />
      ) : (
        <Room
          username={username}
          room={room}
          setUsername={setUsername}
          setRoom={setRoom}
          setChatScreen={setChatScreen}
          socket={socket}
        />
      )}
    </React.Fragment>
  );
}

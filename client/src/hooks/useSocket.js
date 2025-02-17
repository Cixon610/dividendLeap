import { useEffect, useState } from "react";
import io from "socket.io-client";
import { socketAPI } from "../utils/config";
import auth from "../utils/auth";

let socketInstance = null;

export default function useSocket(props) {
  const [socket, setSocket] = useState(socketInstance);

  useEffect(() => {
    if (socketInstance == null && auth.isLogin) {
      socketInstance = io(socketAPI);
      setSocket(socketInstance);
      console.log("socketInstance", socketInstance.connected);
    }
  }, []);

  return socketInstance;
}

import { useCollection } from "../hooks/useCollection";
import { Avatar } from "./Avatar";

import "./OnlineUsers.css";

export function OnlineUsers() {
  const { documents, error, isPending } = useCollection("users");

  return (
    <div className="user-list">
      <h2>All users</h2>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents &&
        documents.map(user => (
          <div key={user.id} className="user-list-item">
            {user.online && <span className="online-user"></span>}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}

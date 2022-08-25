import { Link } from "react-router-dom";

import Button from "./Button";

const UserCard = ({ user }) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <div className="h-80 overflow-hidden">
          <img
            className="rounded-t-lg object-cover"
            src={user.profile_picture}
            alt=""
          />
        </div>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {user.name}
          </h5>
          <Link to={`/${user.slug}`}>
            <Button type="button" text="discover" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

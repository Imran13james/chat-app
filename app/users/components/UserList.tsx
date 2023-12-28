'use client';


import { User } from "@prisma/client";

import UserBox from "./UserBox";

interface UserListProps {
  items: User[];
}
const filterEmails = [
  'email@gmail.com',
  'holotoolers@gmail.com',
];
const UserList: React.FC<UserListProps> = ({
  items,
}) => {
  return (
    <aside
      className="
        fixed 
        inset-y-0 
        pb-20
        lg:pb-0
        lg:left-20 
        lg:w-80 
        lg:block
        overflow-y-auto 
        border-r 
        border-gray-200
        py-4
        block w-full left-0
        dark:bg-gray-900 lg:bg-white
      "
    >
      <div className="px-5 ">
        <div className="flex-col">
          <div
            className="
              text-2xl 
              font-bold 
              text-gray-100 
              py-4
              mb-2 bg-white dark:bg-gray-800 rounded-lg p-4 transition duration-300 hover:shadow-lg
            "
          >
            Talk With ME
          </div>
        </div>
        {items
          .filter((item) => item.email !== null && filterEmails.includes(item.email))
          .map((item) => (
            <div key={item.id} className="mb-2 bg-white dark:bg-gray-800 rounded-lg p-4 transition duration-300 hover:shadow-lg">
            <UserBox  data={item}/>
            </div>
          ))}
      </div>
    </aside>
  );
}

export default UserList;

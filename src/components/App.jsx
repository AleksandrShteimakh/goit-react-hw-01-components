import { Profile } from "./Profile/Profile";
import user from "../user.json";
// import { Trening } from "./Trening/Trening";
import { Statistics } from "./Statistics/Statistics";
import data from "../data.json";
// import { FriendList } from "./FriendList/FriendList";
// import friends from "../friends.json";
// // import { FriendListItem }from "./FriendListItem/FriendListItem";
// import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
// import transactions from "../transactions.json";

export  const App = () => {
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />
      
      <Statistics 
  label={data[0].label}
  percentage={data[0].percentage}  
      />
      {/* <Statistics title="Upload stats" stats={data} /> */}
      {/* <Statistics stats={data} /> */}
      {/* <FriendList friends={friends} /> */}
      {/* <FriendListItem friends={friends} /> */}

      {/* <TransactionHistory items={transactions} /> */} 
    </div>
  )
};

import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";

import Section from "./components/Statistics/Statistics";
import statisticalData from "./components/Statistics/statistical-data.json";

import FriendsList from "./components/FriendsList/FriendsList";
import friendsData from "./components/FriendsList/friends.json";

import TransactionHistory from "./components/Transactions/Transactions";
import transactionsData from "./components/Transactions/transaction-data.json";

export default function App() {
  return (
    <div>
      <Profile
        userName={user.name}
        tag={user.tag}
        avatarUrl={user.avatar}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Section title="Upload stats" stats={statisticalData}></Section>
      <FriendsList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
}

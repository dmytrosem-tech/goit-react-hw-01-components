import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";

import Section from "./components/Statistics/Statistics";
import statisticalData from "./components/Statistics/statistical-data.json";

import FriendsList from "./components/FriendsList/FriendsList";
import friendsData from "./components/FriendsList/friends.json";

import TransactionHistory from "./components/Transactions/Transactions";
import transactionsData from "./components/Transactions/transaction-data.json";

// ---------------Profile--------------------->
const profileMarkup = (
  <Profile
    userName={user.name}
    tag={user.tag}
    avatarUrl={user.avatar}
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
  />
);

// -------------Stats-------------------------->
const statsMarkup = (
  <Section title="Upload stats" stats={statisticalData}></Section>
);

// ------------FriendList---------------------->
const friendsListMarkup = <FriendsList friends={friendsData} />;

// ------------Transactions-------------------->
const transactionsMarkup = <TransactionHistory items={transactionsData} />;

// ------------joke---------------------------->
const jopka = <div>ЖОПКА НАСТАЛА</div>;

// ---------------------------------------------------------RENDER---------------------------------------------------------->
export default function App() {
  return (
    <div>
      {profileMarkup}
      {statsMarkup}
      {friendsListMarkup}
      {transactionsMarkup}
      {jopka}
    </div>
  );
}

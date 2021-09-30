import Profile from "./components/task-1/profile";
import user from "./components/task-1/user.json";

import Section from "./components/task-2/SectionOfStatistic";
import statisticalData from "./components/task-2/statistical-data.json";

import FriendList from "./components/task-3/FriendList";
import friendsData from "./components/task-3/friends.json";

import TransactionHistory from "./components/task-4/Transaction-History";
import transactionsData from "./components/task-4/transaction-data.json";

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
const friendsListMarkup = <FriendList friends={friendsData} />;

// ------------Transactions-------------------->
const transactionsMarkup = <TransactionHistory items={transactionsData} />;

// ------------joke---------------------------->
const jopa = <div>ЖОПКА НАСТАЛА</div>;

// ---------------------------------------------------------RENDER---------------------------------------------------------->
export default function App() {
  return (
    <div>
      {profileMarkup}
      {statsMarkup}
      {friendsListMarkup}
      {transactionsMarkup}
      {jopa}
    </div>
  );
}

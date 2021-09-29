import Profile from "./components/task-1/profile";
import user from "./components/task-1/user.json";

import Section from "./components/task-2/Section";
import StatsList from "./components/task-2/StatsList";
import statisticalData from "./components/task-2/statistical-data.json";

// // ---------------Profile--------------------->
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
const statMarkup = (
  <Section title="Upload stats">
    <StatsList items={statisticalData} />
  </Section>
);

// ------------joke--------------------------->
const jopa = <div>ЖОПКА НАСТАЛА</div>;

// ----------------------------------------RENDER----------------------------------->
export default function App() {
  return (
    <div>
      {profileMarkup}
      {statMarkup}
      {jopa}
    </div>
  );
}

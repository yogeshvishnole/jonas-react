import { useState } from "react";
import { oweMessage } from "./utils";

const initialFriends = [
  {
    avatar: "https://i.pravatar.cc/48",
    id: Date.now(),
    name: "Sarah",
    oweAmount: -2,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleSelectFriend(id) {
    if (id === selectedFriend?.id) {
      setSelectedFriend(null);
      return;
    }
    setSelectedFriend(friends.find((friend) => friend.id === id));
  }

  function handleAddFriendFormToggle() {
    setIsFormOpen((isFormOpen) => !isFormOpen);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    handleAddFriendFormToggle();
  }

  return (
    <div>
      <FriendList
        friends={friends}
        selectedFriend={selectedFriend}
        onSelectFriend={handleSelectFriend}
      />
      {isFormOpen && <AddFriendForm onAddFriend={handleAddFriend} />}
      <Button onClick={handleAddFriendFormToggle}>
        {isFormOpen ? "Close" : "Add friend"}
      </Button>
      {selectedFriend && <SplitBillForm friend={selectedFriend} />}
    </div>
  );
}

function FriendList({ friends, selectedFriend, onSelectFriend }) {
  return (
    <ul style={{ listStyleType: "none" }}>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          isSelected={friend.id === selectedFriend}
          onSelectFriend={onSelectFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, isSelected, onSelectFriend }) {
  return (
    <li style={{ display: "flex", gap: 3, alignItems: "center" }}>
      <img src={friend.avatar} alt="avatar" />
      <div>
        <h4>{friend.name}</h4>
        <p>{oweMessage(friend.oweAmount, friend.name)}</p>
      </div>
      <div>
        <Button onClick={() => onSelectFriend(friend.id)}>
          {isSelected ? "close" : "select"}
        </Button>
      </div>
    </li>
  );
}

function AddFriendForm({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48");

  function handleAddFriend(e) {
    e.preventDefault();
    const newFriend = {
      name: friendName,
      avatar: imgUrl,
      id: Date.now(),
      oweAmount: 0,
    };
    onAddFriend(newFriend);
  }

  return (
    <div style={{ backgroundColor: "khaki", padding: "1rem" }}>
      <form onSubmit={handleAddFriend}>
        <FormInput
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        >
          👭 Friend Name
        </FormInput>
        <FormInput value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}>
          🎴 Image Url
        </FormInput>
        <Button>Add</Button>
      </form>
    </div>
  );
}

function SplitBillForm({ friend }) {
  const [billValue, setBillValue] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [billPayer, setBillPayer] = useState(0);

  return (
    <div>
      <h2>Split a bill with {friend.name}</h2>
      <form>
        <FormInput
          value={billValue}
          onChange={(e) => setBillValue(e.target.value)}
        >
          💰 Bill value
        </FormInput>
        <FormInput
          value={myExpense}
          onChange={(e) => setMyExpense(e.target.value)}
        >
          🧛‍♀️ Your expense
        </FormInput>
        <FormInput
          value={billValue}
          onChange={(e) => setBillValue(e.target.value)}
          disabled={true}
        >
          👭 {friend.name} expense
        </FormInput>
      </form>
    </div>
  );
}

function FormInput({ children, type, value, onChange, disabled }) {
  return (
    <div>
      <label>{children}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

function FormSelect() {}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ display: "inline-block" }}>
      {children}
    </button>
  );
}

export default App;

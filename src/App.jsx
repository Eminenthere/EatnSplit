import { useState } from 'react'
import { Button, FormAddFriend, FormSplitBill, FriendList } from './components'
import './index.css'
import { initialFriends } from './data'

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [friends, setFriends] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState(null)

  const handleShowAddFriend = () => {
    setShowAddFriend((open) => !open)
  }

  const handleAddFriends = (friend) => {
    setFriends((friends) => [...friends, friend])
    setShowAddFriend(false)
  }

  const handleSelection = (friend) => {
    setSelectedFriend(friend)
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList friends={friends} onSelection={handleSelection} />

        {showAddFriend && <FormAddFriend onAddFriends={handleAddFriends} />}

        <Button onIsOpen={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add friend'}
        </Button>
      </div>

      {selectedFriend && <FormSplitBill />}
    </div>
  )
}

export default App

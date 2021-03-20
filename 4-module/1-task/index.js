function makeFriendsList(friends) {
  const listFriends = document.createElement('ul');

  for (const friend of friends) {
    listFriends.insertAdjacentHTML('beforeend', `<li>${friend.firstName} ${friend.lastName}</li>`);
  }

  return listFriends;
}

const data = {
  title: 'Hello, SSR!',
  items: [
    { text: 'These TODOs are created by server', id: 1499151555644 },
    { text: 'Styling', id: 1499151565644 },
    { text: 'Add README', id: 1499151667696 },
  ],
};

class DB {
  readState() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 100);
    });
  }
}

export default DB;

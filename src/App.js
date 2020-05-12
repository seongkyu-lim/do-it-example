import React from 'react';

import ChildComponent from './03/ChildComponent';

class App extends React.Component {
  render() {
    return (
      <ChildComponent
        boolValue={true}
        numValue={1}
        arrayValue={[1, 2, 3]}
        objValue={{ name: '제목', age: 30 }}
        nodeValue={<h1>노드</h1>}
        funcValue={() => {
          console.log('메세지');
        }}
      />
    );
  }
}

export default App;

import React from 'react';
import { Grid } from 'semantic-ui-react';
//import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';
import { connect } from 'react-redux';
import './App.css';

const App = ({ currentUser, currentChannel }) => (
  <Grid columns="equal" className="app" style={{ background: '#eee' }}>

    <SidePanel
      key={currentUser && currentUser.uid}
      currentUser={currentUser}
    />

    <Grid.Column style={{ marginLeft: 270 }}>
      <Messages
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
      />
    </Grid.Column>
    {/*<Grid.Column width={4}>
      <MetaPanel />
    </Grid.Column>*/}


  </Grid >
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel

})

export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';


const EventSearch = ()=> {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs>
          <Tab heading={ <TabHeading><Text style={{fontSize: 12}}>フロントエンジニア</Text></TabHeading>}>
           
          </Tab>
          <Tab heading={ <TabHeading><Text style={{fontSize: 12}}>バックエンドエンジニア</Text></TabHeading>}>
           
          </Tab>
          <Tab heading={ <TabHeading><Text style={{fontSize: 14}}>もくもく会</Text></TabHeading>}>
           
          </Tab>
          
           
          
        </Tabs>
      </Container>
    );
  }

export default EventSearch;

/* @flow */

import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components/native'
import { View,Text } from 'react-native'
import { Container, Content, Card, CardItem,Icon,Right } from 'native-base'
import { Header } from '../../components/profile'
import { Entypo } from '@expo/vector-icons'
import color from '../../components/colors'
import TopHeader  from '../../components/header'

@inject('userStore')
@observer
export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: '帐号',
  }

  navTo = (route) => {
    const { userStore,navigation } = this.props
    navigation.navigate(route)
  }

  render() {
    const { userStore,navigation } = this.props
    const { user } = userStore

    const logo = require('../../images/logo.png')

    const headerProps = {
      name:user.name,
      domain:user.domain,
      backgroundImage:logo ,
      avatar:userStore.getAvatar(),
      nickname:user.nickname,
    }

    return (
      <Container>
          <Container style={{margin:10}}>
            <Content>
               <Card style={{backgroundColor:"#34495e"}}>
                <BorderView>
                  <Header {...headerProps}/>
                </BorderView>
                </Card>
                <Card >
                  <CardItem button  onPress={()=> this.navTo('ProfileInfo')} style={{backgroundColor:"#f1c40f"}}>
                     <Entypo name="user" size={24} />
                     <Text>  个人信息</Text>
                     <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                   </CardItem>

                   <CardItem button onPress={()=> this.navTo('FeedBack')} style={{backgroundColor:"#e74c3c"}}>
                     <Entypo name="eye" size={24} />
                     <Text>  关于</Text>
                     <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                   </CardItem>

                  <CardItem button onPress={()=> this.navTo('FeedBack')} style={{backgroundColor:"#e67e22"}}>
                    <Entypo name="pencil" size={24} />
                    <Text>  反馈</Text>
                    <Right>
                     <Icon name="arrow-forward" />
                   </Right>
                  </CardItem>
                  <CardItem button onPress={()=>{userStore.logout();this.navTo('Login')}} style={{backgroundColor:"#1abc9c"}}>
                    <Entypo name="log-out" size={24} />
                     <Text>  注销</Text>
                     <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                   </CardItem>
                </Card>
            </Content>
        </Container>
      </Container>
    )
  }
}

const BorderView = styled.View`
  border-width:2;
  border-radius:5;
  margin:10;
  border-style:dashed;
  border-color: #2c3e50;
`

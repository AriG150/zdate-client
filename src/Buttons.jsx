import React from 'react'
// import './css/Profile.css';
import './Profile.css'
import { tsParenthesizedType } from '@babel/types';
import Chat from './Chat';

class Buttons extends React.Component {
    state = {
        happy: false,
        sad: false,
        class1: 'happyhighlight',
        class2: 'normal',
        class3: 'sadhighlight'
    }

    changeHappy = e => {
        if (this.state.happy == false && this.state.sad == false) {
            this.setState({happy: true})
        } else if (this.state.happy == false && this.state.sad == true) {
            this.setState({happy: true, sad: false})
        } else if (this.state.happy == true && this.state.sad == false) {
            console.log('nothing happened')
        }
    }

    changeSad = e => {
        if (this.state.happy == false && this.state.sad == false) {
            this.setState({sad: true})
        } else if (this.state.happy == true && this.state.sad == false) {
            this.setState({happy: false, sad: true})
        } else if (this.state.happy == false && this.state.sad == true) {
            console.log('nothing happened')
        }
    }


    render() {
        let sadbutt
        let happybutt
        if (this.state.sad == false) {
            sadbutt = <button className={this.state.class2} onClick={this.changeSad}>
            <i class="material-icons md-48">sentiment_very_dissatisfied </i></button>
        } else {
            sadbutt = <button className={this.state.class3} onClick={this.changeSad}>
                <i class="material-icons md-48">sentiment_very_dissatisfied </i>
            </button>
        }

        if (this.state.happy == false) {
            happybutt = <button className={this.state.class2} onClick={this.changeHappy}>
                <i class="material-icons md-48">sentiment_satisfied_alt</i>
            </button>
        } else {
            happybutt = <Chat />
            sadbutt = <div></div>
        }

        return (
            <div>
                <span>
                    {/* <button className={this.state.class2} onClick={}>☺</button> */}
                    {/* <button className={this.state.class2} onClick={}>☹</button> */}
                    {sadbutt} {happybutt} 
                </span>
                {/* <i class="material-icons md-48">sentiment_satisfied_alt</i>  */}
                {/* <i class="material-icons md-48">sentiment_very_dissatisfied </i> */}
            </div>
        )
    }
}


export default Buttons
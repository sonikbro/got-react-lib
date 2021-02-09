import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';



export default class CharacterPage extends Component {
    gotService = new GotService();

    state = {
        selectedChar: 130,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    } 

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
            onItemSelected={this.onItemSelected}
            getData = {this.gotService.getAllCharacters}
            renderItem={({name, gender}) => `${name} (${gender})`}/>
        )

        const charDetails = (
            <CharDetails charId={this.state.selectedChar}>
                <Field field='gender' label='Стать'/>
                <Field field='born' label='Народився'/>
                <Field field='died' label='Помер'/>
                <Field field='culture' label='Культура'/>
            </CharDetails>
        )

        return(
            <RowBlock 
                left={itemList}
                right={charDetails}/>
        )
    }
}
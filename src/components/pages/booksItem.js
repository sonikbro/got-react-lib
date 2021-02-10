import React, {Component} from 'react';
import gotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails';

export default class BooksItem extends Component {
    gotService = new gotService();

    render () {
        return (
            <ItemDetails
            itemId={this.props.bookId}
            getData={this.gotService.getBook} >
                <Field field='numberOfPages' label='Кількість сторінок'/>
                <Field field='publisher' label='Видавництво'/>
                <Field field='released' label='Випуск'/>
            </ItemDetails>
        )
    }
}


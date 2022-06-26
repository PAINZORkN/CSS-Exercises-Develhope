import React from 'react'
import { LanguageContext } from './Context01'



export class DisplayLanguage extends React.Component {

    render() {
        return (
            <div>
                <LanguageContext.Consumer>
                    {(language) => {
                        return (
                            <div>
                                <h1>{this.state.time}</h1>
                            </div>
                        )
                    }}
                </LanguageContext.Consumer>
            </div>
        )
    }
}


/*
Consume the LanguageContext within the DisplayLanguage 
component by using the context consumer, 
and show the selected language in an h1 tag.
*/


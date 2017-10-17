import * as React from 'react'

require('!style-loader!css-loader!sass-loader!./App.scss')

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return <div className='app'>
            <h1>Welcome vto MultiTrak</h1>
            <p>Upload individual stems from your DAW:</p>
        </div>
    }
}

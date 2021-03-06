import React from 'react';

class SearchBar extends React.Component
{
    state = { term:''}
    onInputChange = (event) =>
    {
        this.setState({term:event.target.value})
    };
    onFormSubmit = event => {
        event.preventDefault();
      
        
        this.props.onVideoFormSubmit(this.state.term);
    }
    render()
    {
        return (
            <div className="search-bar ui segment"> 
            <form className="ui form"  onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label> Search for a Video </label>
                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={this.onInputChange}/>
                </div>
                </form> 
            </div>
        )
    }
}
export default SearchBar;
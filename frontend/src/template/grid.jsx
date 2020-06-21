import React, {Component} from 'react'


export default class Grid extends Component {
    toCssClass(numbers){
        const cols = numbers ? numbers.split(' ') : []
        let line = ''

        if (cols[0]) line += `col-xs-${cols[0]} `
        if (cols[1]) line += `col-sm-${cols[1]} `
        if (cols[2]) line += `col-md-${cols[2]} `
        if (cols[3]) line += `col-lg-${cols[3]}`

        return line
    }

    render(){
        const gridClass = this.toCssClass(this.props.cols || '12')

        return(
            <div className={gridClass}>
                {this.props.children}
            </div>
        )
    }
}
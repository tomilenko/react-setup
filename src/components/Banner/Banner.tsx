import * as React from 'react';
import './Banner.scss';

interface IProps {
    name: string;
}

export default class Banner extends React.Component<IProps> {
    handleSmt = (id: number) => console.log(id);

    public render(): any {
        return (
            <div className="banner">
                <span className="banner__text">Hello {this.props.name}!</span>
            </div>
        );
    }
}

import * as React from 'react';
import MovieEntry from "./MovieEntry";

export interface IAppProps {
    onAdd: (movie: MovieEntry) => void;
}

export interface IAppState {
    inputText: string;
}

export default class AddMovieComponent extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = { inputText: '' }
    }

    public render() {
        return (
            <div>
                <input
                    id="title_input"
                    onChange={evt =>
                        this.setState({ ...this.state, inputText: evt.target.value })
                    }
                />
                <button
                    onClick={event => {
                        let newMovie: MovieEntry = {
                            title: this.state.inputText,
                            desc: "",
                            link: "",
                            rating: 0
                        };
                        this.props.onAdd(newMovie);
                    }}
                >
                    OK
        </button>
            </div>
        );
    }
}

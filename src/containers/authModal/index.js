import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { isLogined, signIn } from '../../modules/auth/actions';

class AuthModal extends React.Component {
    state = {
        open: !this.props.isLogined(),
        login: ''
    };

    handleKeyPress = (e) => {
        if (e.charCode === 13) {
            this.auth();
        }
    };

    auth = () => {
        this.props.signIn(this.state);
        if (this.props.isLogined()) {
            this.setState({
                open: false
            })
        }

    };

    render() {
        const actions = [
            <RaisedButton
                className="login-button"
                label="Войти"
                disabled={!this.state.login}
                onClick={this.auth}
            />
        ];

        return (
            <Dialog
                title="Авторизация"
                actions={actions}
                modal={false}
                open={this.state.open}
            >
                <TextField
                    hintText="Ваш логин..."
                    fullWidth={true}
                    value={this.state.login}
                    onChange={(e) => { this.setState({
                        login: e.target.value
                    })}}
                    onKeyPress={this.handleKeyPress}
                />
            </Dialog>
        )
    }
}

export default connect(
    state => ({
        login: state.auth.login,
        gender: state.auth.gender
    }), {
        isLogined, signIn
    }
)(AuthModal);
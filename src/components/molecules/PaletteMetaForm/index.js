import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: "form",
            newPaletteName: '',
        };
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        );
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    showEmojiPicker = () => {
        this.setState({ stage: 'emoji' });
    }

    submitNewPalette = emoji => {
        // 顯示你點擊的 emoji
        console.log(emoji.native)
        const newPalette = {
            paletteName: this.state.newPaletteName,
            emoji: emoji.native
        }
        this.props.savePalette(newPalette);
    }

    render() {
        const { newPaletteName, stage } = this.state;
        const { hideDialog } = this.props;
        return (
            <div>
                <Dialog open={stage === "emoji"} onClose={hideDialog}>
                    <DialogTitle id="form-dialog-title">Choose a Emoji</DialogTitle>
                    <Picker title="Pick a Palette Emoji" onSelect={this.submitNewPalette} />
                </Dialog>
                <Dialog open={stage === "form"} onClose={hideDialog} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                    <ValidatorForm onSubmit={this.showEmojiPicker} ref='form'>
                        <DialogContent>
                            <DialogContentText>
                                Please enter a name for your new beautiful palette. Make sure it's unique!
                            </DialogContentText>
                            <TextValidator
                                value={newPaletteName}
                                label="Palette Name"
                                name="newPaletteName"
                                onChange={this.handleChange}
                                fullWidth
                                margin="normal"
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={[
                                    "Enter a palette name",
                                    "Palette name must be unique",
                                ]}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={hideDialog} color="primary">
                                Cancel
                            </Button>
                            <Button variant='contained' color="primary" type="submit">
                                Save Palette
                            </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        );
    }
}


PaletteMetaForm.propTypes = {
    palettes: PropTypes.array,
    hideDialog: PropTypes.func,
    savePalette: PropTypes.func,
};

export default PaletteMetaForm;
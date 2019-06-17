import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            newPaletteName: '',
        };
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        );
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        const { open, newPaletteName } = this.state;
        const { savePalette } = this.props;
        return (
            <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                <ValidatorForm onSubmit={() => savePalette(newPaletteName)} ref='form'>
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
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button variant='contained' color="primary" type="submit">
                            Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        );
    }
}


PaletteMetaForm.propTypes = {
    savePalette: PropTypes.func,
    palettes: PropTypes.array
};

export default PaletteMetaForm;
import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import Button from "@material-ui/core/Button";

class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: '#000',
            newColorName: '',
        };
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        
        ValidatorForm.addValidationRule("isColorUnique", value =>
            this.props.colors.every(
                ({ color }) => {
                    return color !== this.state.currentColor
                }
            )
        );
    }

    updateCurrentColor = newColor => {
        this.setState({ currentColor: newColor.hex });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSumbit = () => {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        };
        // this.setState({  newColorName: '' });
        this.props.addNewColor(newColor);
    }

    render() {
        const { paletteIsFull } = this.props;
        const { currentColor, newColorName } = this.state;
        return (
            <Fragment>
                <ChromePicker color={currentColor} onChangeComplete={this.updateCurrentColor} />
                <ValidatorForm onSubmit={this.handleSumbit} ref='form'>
                    <TextValidator
                        value={newColorName}
                        name="newColorName"
                        onChange={this.handleChange}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={[
                            "Enter a color name",
                            "Color name must be unique",
                            "Color already used!"
                        ]}
                    />
                    <Button 
                        variant='contained'
                        type="submit"
                        color="primary"
                        disabled={paletteIsFull}
                        style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
                    >
                        {paletteIsFull ? 'Palette Full' : 'Add Color'}
                    </Button>
                </ValidatorForm>
            </Fragment>
        )
    }
}

ColorPickerForm.propTypes = {
    paletteIsFull: PropTypes.bool,
    addNewColor: PropTypes.func,
    colors: PropTypes.array,
};


export default ColorPickerForm;

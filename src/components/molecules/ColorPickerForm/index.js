import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import Button from "@material-ui/core/Button";

const styles = {
    picker: {
        // 覆蓋原本套件的寬度
        width: "100% !important",
        marginTop: "32px",
    },
    addColor: {
        width: "100%",
        marginTop: "16px",
        padding: "8px",
        fontSize: "24px",
    },
    colorNameInput: {
        width: "100%",
        height: '70px',
    }
};

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
        const { paletteIsFull, classes } = this.props;
        const { currentColor, newColorName } = this.state;
        return (
            <div>
                <ChromePicker
                    className={classes.picker}
                    color={currentColor}
                    onChangeComplete={this.updateCurrentColor}
                />
                <ValidatorForm onSubmit={this.handleSumbit} ref='form'>
                    <TextValidator
                        className={classes.colorNameInput}
                        value={newColorName}
                        name="newColorName"
                        variant='filled'
                        margin="normal"
                        placeholder="Color Name"
                        onChange={this.handleChange}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={[
                            "Enter a color name",
                            "Color name must be unique",
                            "Color already used!"
                        ]}
                    />
                    <Button
                        className={classes.addColor}
                        variant='contained'
                        type="submit"
                        color="primary"
                        disabled={paletteIsFull}
                        style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
                    >
                        {paletteIsFull ? 'Palette Full' : 'Add Color'}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

ColorPickerForm.propTypes = {
    paletteIsFull: PropTypes.bool,
    addNewColor: PropTypes.func,
    colors: PropTypes.array,
};


export default withStyles(styles)(ColorPickerForm);

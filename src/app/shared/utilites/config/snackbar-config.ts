import { MatSnackBarConfig } from "@angular/material/snack-bar";

export const  Success: MatSnackBarConfig = {
    panelClass: ['success-snackbar'],
    duration: 2000,
    verticalPosition: 'top'
};
export const Warning: MatSnackBarConfig ={
    panelClass: ['warning-snackbar'],
    duration: 2000,
    verticalPosition: 'top',
}
export const Info: MatSnackBarConfig ={
    panelClass: ['info-snackbar'],
    duration: 2000,
    verticalPosition: 'top'
}

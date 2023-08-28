import { toast, ToastContainer } from 'react-toastify'

export const ToastifyService = {
  notfy (
    message: string,
    type: MessageType,
    options:Partial<CTS_Options>
  ) {
    const isHide = options.hide == 1 ? true : false
    toast[type](message, {
      autoClose: options.timeoutDuration,
      hideProgressBar: isHide,
      position:options.position
    })
  }
}

export const CustomToastifyContainer = () => {
  return <ToastContainer />
}
export enum Position{
 TopLeft= "top-left",
 TopRight="top-right",
 TopCenter="top-center",
 BottomLeft="bottom-left",
 BottomRight="bottom-right",
 BottomCenter="bottom-center"
}
export enum MessageType {
  Success = 'success',
  Warning = 'warning',
  Info = 'info',
  Error='error'
}

export enum TimeoutDuration {
  Fast = 2000,
  Slow = 5000,
  Moderate = 3000
}

export enum Hide {
  True = 1,
  False = 0
}

export class CTS_Options{
  timeoutDuration?: TimeoutDuration=TimeoutDuration.Fast;
  hide?: Hide=Hide.False;
  position?:Position=Position.TopRight;
}
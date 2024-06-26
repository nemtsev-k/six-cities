import React from 'react';

type LoginInputEmailProps = {
  loginRef: React.RefObject<HTMLInputElement>;
};

export function LoginInputEmail({loginRef}: LoginInputEmailProps): JSX.Element {
  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">E-mail</label>
      <input
        className="login__input form__input"
        type="email"
        name="email"
        placeholder="Email"
        ref={loginRef}
        required
        data-testid="emailElement"
      />
    </div>
  );
}

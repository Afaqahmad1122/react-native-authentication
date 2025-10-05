export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};

export const validateForm = {
  login: (email: string, password: string) => {
    const errors: string[] = [];

    if (!email.trim()) {
      errors.push("Email is required");
    } else if (!validateEmail(email)) {
      errors.push("Please enter a valid email");
    }

    if (!password.trim()) {
      errors.push("Password is required");
    }

    return errors;
  },

  register: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    const errors: string[] = [];

    if (!firstName.trim()) {
      errors.push("First name is required");
    } else if (!validateName(firstName)) {
      errors.push("First name must be at least 2 characters");
    }

    if (!lastName.trim()) {
      errors.push("Last name is required");
    } else if (!validateName(lastName)) {
      errors.push("Last name must be at least 2 characters");
    }

    if (!email.trim()) {
      errors.push("Email is required");
    } else if (!validateEmail(email)) {
      errors.push("Please enter a valid email");
    }

    if (!password.trim()) {
      errors.push("Password is required");
    } else if (!validatePassword(password)) {
      errors.push("Password must be at least 8 characters");
    }

    if (password !== confirmPassword) {
      errors.push("Passwords do not match");
    }

    return errors;
  },
};

"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Checkbox } from "@heroui/checkbox";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formData);
      alert("Registration successful! Welcome to CoffeeBook!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-8">
      <div className="w-full max-w-lg">
        <Card className="w-full">
          <CardHeader className="flex flex-col gap-4 text-center pb-6">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center w-20 h-20 bg-amber-100 dark:bg-amber-900/20 rounded-full">
                <svg className="w-10 h-10 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  Create Account
                </h1>
                <p className="text-base text-default-500 mt-2">
                  Join CoffeeBook and start your journey
                </p>
              </div>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="gap-6 px-8 py-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-6">
                <Input
                  type="text"
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  isInvalid={!!errors.firstName}
                  errorMessage={errors.firstName}
                  variant="bordered"
                  size="lg"
                />
                <Input
                  type="text"
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  isInvalid={!!errors.lastName}
                  errorMessage={errors.lastName}
                  variant="bordered"
                  size="lg"
                />
              </div>

              {/* Email Field */}
              <Input
                type="email"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                isInvalid={!!errors.email}
                errorMessage={errors.email}
                variant="bordered"
                size="lg"
              />

              {/* Password Field */}
              <Input
                type={showPassword ? "text" : "password"}
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                isInvalid={!!errors.password}
                errorMessage={errors.password}
                variant="bordered"
                size="lg"
                endContent={
                  <Button
                    isIconOnly
                    variant="light"
                    size="sm"
                    onPress={() => setShowPassword(!showPassword)}
                    className="text-default-400"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </Button>
                }
              />

              {/* Confirm Password Field */}
              <Input
                type={showConfirmPassword ? "text" : "password"}
                label="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="••••••••"
                isInvalid={!!errors.confirmPassword}
                errorMessage={errors.confirmPassword}
                variant="bordered"
                size="lg"
                endContent={
                  <Button
                    isIconOnly
                    variant="light"
                    size="sm"
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-default-400"
                  >
                    {showConfirmPassword ? (
                      <EyeSlashIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </Button>
                }
              />

              {/* Terms Checkbox */}
              <div className="space-y-3">
                <Checkbox
                  name="agreeToTerms"
                  isSelected={formData.agreeToTerms}
                  onValueChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: checked }))}
                  isInvalid={!!errors.agreeToTerms}
                >
                  Accept terms and conditions
                </Checkbox>
                <p className="text-sm text-default-500 ml-6">
                  I agree to the{" "}
                  <Link href="#" color="primary" size="sm">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="#" color="primary" size="sm">
                    Privacy Policy
                  </Link>
                </p>
                {errors.agreeToTerms && (
                  <p className="text-sm text-danger ml-6">{errors.agreeToTerms}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full bg-amber-600 hover:bg-amber-700 mt-4"
                startContent={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                }
              >
                Create Account
              </Button>

              {/* Login Link */}
              <div className="text-center pt-2">
                <p className="text-sm text-default-500">
                  Already have an account?{" "}
                  <Link href="/" color="primary" size="sm">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

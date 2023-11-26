"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AlertCircle, Check, EyeIcon, EyeOff } from "lucide-react";
import { validationConditions } from "@/actions/reset-password";
import ResetSucessful from "./ResetSucessful";
import { resetpassword } from "@/actions/reset-password";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const formSchema = z.object({
  password: z.string().min(1, {
    message: "Password cannot be empty.",
  }),
  confirmPassword: z.string().min(1, {
    message: "Password cannot be empty.",
  }),
});

const ResetPassword = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [symbolChanged, setSymbolChanged] = useState(false);
  const [password1Validations, setPassword1Validations] = useState({
    length: true,
    uppercase: true,
    lowercase: true,
    number: true,
    specialChar: true,
  });
  const [passwordsNotMatch, setPasswordsNotMatch] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams()
 
  const userdetailtoken = searchParams.get('userdetailtoken')

  useEffect(() => {
    const validatePassword1 = () => {
      setSymbolChanged(true);
      const lengthValid = password1.length >= validationConditions.length;
      const uppercaseValid = validationConditions.casing
        ? /[A-Z]/.test(password1)
        : true;
      const lowercaseValid = validationConditions.casing
        ? /[a-z]/.test(password1)
        : true;
      const numberValid = validationConditions.number
        ? /\d/.test(password1)
        : true;
      const specialCharValid = validationConditions.specialCharacter
        ? /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password1)
        : true;

      setPassword1Validations({
        length: lengthValid,
        uppercase: uppercaseValid,
        lowercase: lowercaseValid,
        number: numberValid,
        specialChar: specialCharValid,
      });
    };
    validatePassword1();
  }, [password1]);

  useEffect(() => {
    const allValidationsPassed =
      password1Validations.length &&
      password1Validations.uppercase &&
      password1Validations.lowercase &&
      password1Validations.number &&
      password1Validations.specialChar &&
      !passwordsNotMatch;
    setIsSubmitDisabled(!allValidationsPassed);
  }, [password1Validations, passwordsNotMatch]);

  useEffect(() => {
    setPasswordsNotMatch(password1 !== password2);
  }, [password1, password2]);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleconfirmPassword = () => {
    setShowconfirmPassword((prev) => !prev);
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    data={...data, userdetailtoken};
    try {
      const resp = await resetpassword(data);
      setSubmitted((prev) => true);
    } catch (error) {
      toast.error(error.response.data.errorMessage);
      // console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="rounded-2xl">
      {!submitted ? (
        <CardContent>
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="m-2 custom-s1 custom-text-grey800 text-center">
              Reset your Password
            </CardTitle>
          </CardHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <div className="flex flex-col">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className=" mx-8 space-y-0 custom-text-grey600 focus-within:custom-text-secondary-light-1">
                      <div className="flex">
                        <FormLabel
                          className="px-1 custom-n2 flex-1"
                          htmlFor="password"
                        >
                          New Password
                        </FormLabel>
                      </div>
                      <FormControl
                        onChange={(event) => {
                          setPassword1(event.target.value);
                        }}
                      >
                        <div className=" relative">
                          <Input
                            id="password"
                            disabled={loading}
                            placeholder="Enter new password"
                            className=" custom-bg-grey100 custom-text-grey800 custom-b1 custom-input-stlyes focus:custom-border-secondary-light-1 focus:custom-input-stlyes"
                            type={showPassword ? "text" : "password"}
                            {...field}
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                            onClick={handleTogglePassword}
                          >
                            {!showPassword ? (
                              <EyeIcon className="h-6 w-6 custom-text-grey600" />
                            ) : (
                              <EyeOff className="h-6 w-6 custom-text-grey600" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <div className="px-1 custom-caption">
                        <ul>
                          <li
                            className={` ${
                              password1Validations.length || password1 === ""
                                ? "custom-text-grey600"
                                : "custom-text-system-red"
                            } flex flex-row pt-2 space-x-1`}
                          >
                            {password1Validations.length && symbolChanged ? (
                              <Check
                                height={16}
                                className="custom-text-system-green"
                              />
                            ) : (
                              <AlertCircle
                                height={16}
                                className="rotate-180 "
                              />
                            )}
                            Must contain at least {validationConditions.length}{" "}
                            characters
                          </li>
                          {validationConditions.casing && (
                            <li
                              className={` ${
                                (password1Validations.lowercase &&
                                  password1Validations.uppercase) ||
                                password1 === ""
                                  ? "custom-text-grey600"
                                  : "custom-text-system-red"
                              } flex flex-row pt-1 space-x-1`}
                            >
                              {password1Validations.lowercase &&
                              password1Validations.uppercase &&
                              symbolChanged ? (
                                <Check
                                  height={16}
                                  className="custom-text-system-green"
                                />
                              ) : (
                                <AlertCircle
                                  height={16}
                                  className="rotate-180 "
                                />
                              )}
                              Must contain an uppercase and a lower case (A, z)
                            </li>
                          )}
                          {validationConditions.number && (
                            <li
                              className={` ${
                                password1Validations.number || password1 === ""
                                  ? "custom-text-grey600"
                                  : "custom-text-system-red"
                              } flex flex-row pt-1 space-x-1`}
                            >
                              {password1Validations.number && symbolChanged ? (
                                <Check
                                  height={16}
                                  className="custom-text-system-green"
                                />
                              ) : (
                                <AlertCircle
                                  height={16}
                                  className="rotate-180 "
                                />
                              )}
                              Must contain a number
                            </li>
                          )}
                          {validationConditions.specialCharacter && (
                            <li
                              className={` ${
                                password1Validations.specialChar ||
                                password1 === ""
                                  ? "custom-text-grey600"
                                  : "custom-text-system-red"
                              } flex flex-row pt-1 space-x-1`}
                            >
                              {password1Validations.specialChar &&
                              symbolChanged ? (
                                <Check
                                  height={16}
                                  className="custom-text-system-green"
                                />
                              ) : (
                                <AlertCircle
                                  height={16}
                                  className="rotate-180 "
                                />
                              )}
                              Must contain a special character
                            </li>
                          )}
                        </ul>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="mt-8 mx-8 space-y-0 custom-text-grey600 focus-within:custom-text-secondary-light-1">
                      <div className="flex">
                        <FormLabel
                          className="px-1 custom-n2 flex-1"
                          htmlFor="confirmPassword"
                        >
                          Confirm Password
                        </FormLabel>
                      </div>
                      <FormControl
                        onChange={(event) => {
                          setPassword2(event.target.value);
                        }}
                      >
                        <div className=" relative">
                          <Input
                            id="confirmPassword"
                            disabled={loading}
                            placeholder="Comfirm new password"
                            className=" custom-bg-grey100 custom-text-grey800 custom-b1 custom-input-stlyes focus:custom-border-secondary-light-1 focus:custom-input-stlyes"
                            type={showconfirmPassword ? "text" : "password"}
                            {...field}
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                            onClick={handleToggleconfirmPassword}
                          >
                            {!showconfirmPassword ? (
                              <EyeIcon className="h-6 w-6 custom-text-grey600" />
                            ) : (
                              <EyeOff className="h-6 w-6 custom-text-grey600" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      {passwordsNotMatch && (
                        <div
                          className={` ${"custom-text-system-red"} flex flex-row pt-2 px-1 custom-caption space-x-1`}
                        >
                          <AlertCircle height={16} className="rotate-180 " />
                          Password is not matching
                        </div>
                      )}
                    </FormItem>
                  )}
                />
                <Button
                  disabled={loading || isSubmitDisabled}
                  className={`custom-b1 self-center w-10/12 mt-16 mb-8 custom-bg-primary disabled:custom-bg-grey200 disabled:opacity-100 text-white hover:custom-bg-secondary`}
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      ) : (
        <ResetSucessful />
      )}
    </Card>
  );
};

export default ResetPassword;

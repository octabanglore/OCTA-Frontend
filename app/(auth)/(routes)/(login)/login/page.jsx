"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { EyeIcon, EyeOff } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import useLogin from "@/hooks/use-auth";
import auth from "@/actions/auth";
import toast from "react-hot-toast";

const formSchema = z.object({
  usertype: z.string(),
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password cannot be empty.",
  }),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast2 } = useToast();
  const { login } = useLogin();

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      usertype: "retailer",
      email: "",
      password: "",
      // rememberMe: false,
    },
  });

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const resp = await auth(data);
      await login(resp)
      router.push("/")
    } catch (error) {
      toast.error(error.response.data.errorMessage);
      // console.error('Error during login:',error.response.data.errorMessage);
    } finally{
      setLoading(false)
    }
    // toast2({
    //   variant: "error",
    //   // variant: "destructive",
    //   description: " try again.",
    //   // description: "Invalid email/password! Please check the credential and try again.",
    // });
    // router.push("/homepage");
  };

  return (
    <Card className="rounded-2xl">
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <div className="flex flex-col">
              <FormField
                control={form.control}
                name="usertype"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        className="flex justify-center space-x-16 mt-8 self-center"
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <div className="flex items-center ">
                          <RadioGroupItem
                            value="retailer"
                            id="retailer"
                            className={` ${
                              field.value === "retailer"
                                ? " text-customPrimary hover:cursor-default"
                                : "text-customGrey800 hover:cursor-pointer"
                            } custom-b1`}
                          />
                          <Label
                            className={`ml-1 ${
                              field.value === "retailer"
                                ? "text-customPrimary"
                                : "text-customGrey800 hover:cursor-pointer"
                            } custom-b1`}
                            htmlFor="retailer"
                          >
                            Retailer
                          </Label>
                        </div>
                        <div className="flex items-center ">
                          <RadioGroupItem
                            value="supplier"
                            id="supplier"
                            className={`${
                              field.value === "supplier"
                                ? " text-customPrimary hover:cursor-default"
                                : "text-customGrey800 hover:cursor-pointer"
                            } custom-b1`}
                          />
                          <Label
                            className={`ml-1 ${
                              field.value === "supplier"
                                ? "text-customPrimary"
                                : "text-customGrey800 hover:cursor-pointer"
                            } custom-b1`}
                            htmlFor="supplier"
                          >
                            Supplier
                          </Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className="custom-caption px-1" />
                  </FormItem>
                )}
              />
              <Separator className="mt-4 self-center bg-customGrey100 w-8/12" />
              <FormField
                control={form.control}
                disabled ={loading}
                name="email"
                render={({ field }) => (
                  <FormItem className="mt-8 mx-8 space-y-0 text-customGrey600 focus-within:text-customSecondaryLight1">
                    <FormLabel className="px-1 custom-n2" htmlFor="email">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        disabled={loading}
                        className="bg-customGrey100 text-customGrey800 custom-b1 custom-input-stlyes focus:custom-border-secondary-light-1 focus:custom-input-stlyes"
                        placeholder="Enter Email Address..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="custom-caption px-1 pt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                disabled ={loading}
                render={({ field }) => (
                  <FormItem className="mt-6 mx-8 space-y-0 text-customGrey600 focus-within:text-customSecondaryLight1">
                    <div className="flex">
                      <FormLabel
                        className="px-1 custom-n2 flex-1"
                        htmlFor="password"
                      >
                        Password
                      </FormLabel>
                      <Link
                        href="/forgotpassword"
                        className="flex-2 custom-caption text-customPrimary "
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <FormControl>
                      <div className=" relative">
                        <Input
                          id="password"
                          disabled={loading}
                          placeholder="Password"
                          className=" bg-customGrey100 text-customGrey800 custom-b1 custom-input-stlyes focus:custom-border-secondary-light-1 focus:custom-input-stlyes"
                          type={showPassword ? "text" : "password"}
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                          onClick={handleTogglePassword}
                        >
                          {!showPassword ? (
                            <EyeIcon className="h-6 w-6 text-customGrey600" />
                          ) : (
                            <EyeOff className="h-6 w-6 text-customGrey600" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="custom-caption px-1 pt-1" />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Remember Me</FormLabel>
                    </div>
                  </FormItem>
                )}
              /> */}
              <Button
                disabled={loading}
                className="custom-b1 self-center w-10/12 mt-16 mb-8 bg-customPrimary text-white disabled:bg-customGrey200 hover:bg-customSecondary"
                type="submit"
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Login;

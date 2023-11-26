"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import Emailsent from "./emailsent";
import forgotpassword from "@/actions/forgot-password";
import toast from "react-hot-toast";

const formSchema = z.object({
  username: z.string().email(),
});

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const resp = await forgotpassword(data);
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
        <>
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="mt-2 mb-6 custom-s1 custom-text-grey800 text-center">
              Forgot your Password
            </CardTitle>
            <CardDescription className="custom-b1 custom-text-grey600 text-center">
              Please confirm the registered email address to send the password
              reset link.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full"
              >
                <div className="flex flex-col">
                  <FormField
                    control={form.control}
                    name="username"
                    disabled={loading}
                    render={({ field }) => (
                      <FormItem className="mt-2 mx-8 space-y-0 custom-text-grey600 focus-within:custom-text-secondary-light-1">
                        <FormLabel className="px-1 custom-n2" htmlFor="username">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="username"
                            className="custom-bg-grey100 custom-text-grey800 custom-b1 custom-input-stlyes focus:custom-border-secondary-light-1 focus:custom-input-stlyes"
                            // placeholder="Enter Email Address..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="custom-caption px-1 pt-1" />
                      </FormItem>
                    )}
                  />
                  <Button
                    disabled={loading}
                    className="custom-b1 self-center w-10/12 mt-12 custom-bg-primary text-white disabled:custom-bg-grey200  hover:custom-bg-secondary"
                    type="submit"
                  >
                    Request reset link
                  </Button>
                  <Link
                    href="/login"
                    className="self-center mt-[18px] mb-[34px] custom-b1 custom-text-primary-light-1 "
                  >
                    Back to login
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
        </>
      ) : (
        <Emailsent />
      )}
    </Card>
  );
};

export default ForgotPassword;

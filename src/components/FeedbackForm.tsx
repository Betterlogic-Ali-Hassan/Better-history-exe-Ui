import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  feedbackSchema,
  type FeedbackFormData,
} from "@/schemas/feedbackschemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { RadioGroup } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Button from "./ui/Button";

import FileUploader from "./FileUploader";
import { cn } from "@/lib/utils";

const feedbackTypes = [
  "General Contact",
  "Feedback",
  "Bug Report",
  "Feature Request",
] as const;

export function FeedbackForm() {
  const [wordCount, setWordCount] = useState(0);
  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      feedback: "",
      email: "",
      type: "General Contact",
      acceptTerms: false,
      image: undefined, // ✅ Default value
    },
  });

  const onSubmit = async (data: FeedbackFormData) => {
    console.log(data);
  };

  return (
    <div className='p-2 space-y-6'>
      <h1 className='text-[22px] mb-6 font-semibold'>What can we improve?</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
          <div className='space-y-4'>
            {/* Feedback Textarea */}
            <FormField
              control={form.control}
              name='feedback'
              render={({ field }) => (
                <FormItem>
                  <div className='text-sm text-foreground'>
                    Total Words {wordCount}/1000
                  </div>
                  <FormControl>
                    <textarea
                      placeholder='Please describe what we could add or improve.'
                      className='min-h-[144px] input py-2'
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setWordCount(e.target.value.split(/\s+/).length);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Feedback Type Radios */}
            <div className='flex gap-2 flex-wrap mt-6'>
              {feedbackTypes.map((type) => (
                <FormField
                  key={type}
                  control={form.control}
                  name='type'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className='flex'
                        >
                          <button
                            type='button'
                            onClick={() => field.onChange(type)}
                            className={cn(
                              "px-4 py-2 rounded-md border text-sm transition bg-background text-text border-border cursor-pointer hover:bg-hover",
                              field.value === type && "bg-hover text-text  "
                            )}
                          >
                            {type}
                          </button>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}
            </div>

            {/* ✅ Image Uploader */}
            <FormField
              control={form.control}
              name='image'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FileUploader
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='mb-4'>
                    Please provide your email for follow-up on your submission.
                  </FormLabel>
                  <FormControl>
                    <input placeholder='Email' {...field} className='input' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Terms + Submit Button */}
            <div className='flex items-center gap-2 justify-between mt-8'>
              <FormField
                control={form.control}
                name='acceptTerms'
                render={({ field }) => (
                  <FormItem>
                    <div className='flex items-center space-x-1.5'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className='h-5 w-5 mr-3'
                        />
                      </FormControl>
                      <FormLabel className='text-sm gap-1'>
                        I accept the{" "}
                        <a
                          href='https://betterhistory.io/privacy/'
                          className='text-brand hover:underline'
                        >
                          Privacy Policy
                        </a>{" "}
                        and data processing.
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='max-w-max'>
                Submit Feedback
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const renewalSchema = z.object({
  identifier: z.string()
    .trim()
    .min(3, "Please enter your email, phone or username")
    .max(255, "Identifier must be less than 255 characters"),
});

type RenewalFormValues = z.infer<typeof renewalSchema>;

interface RenewalFormProps {
  price: string;
  isProcessing: boolean;
  onSubmit: (data: RenewalFormValues) => void;
}

export const RenewalForm = ({ price, isProcessing, onSubmit }: RenewalFormProps) => {
  const form = useForm<RenewalFormValues>({
    resolver: zodResolver(renewalSchema),
    defaultValues: {
      identifier: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="identifier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email, Phone or Username *</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your email, phone number or username"
                  autoComplete="username email tel"
                  inputMode="text"
                  {...field}
                />
              </FormControl>
              <p className="text-sm text-muted-foreground mt-2">
                Please enter the same email, phone number or username you used when you first registered.
              </p>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-2 p-4 bg-muted/50 rounded-lg">
          <Lock className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">
            Your information is encrypted and secure
          </p>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isProcessing}
        >
          {isProcessing ? (
            "Processing..."
          ) : (
            <>
              <Lock className="mr-2 h-4 w-4" />
              Renew Subscription - ${price}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

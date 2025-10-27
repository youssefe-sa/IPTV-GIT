import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const newCustomerSchema = z.object({
  fullName: z.string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Full name can only contain letters, spaces, hyphens and apostrophes"),
  phone: z.string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 digits")
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, "Invalid phone number format"),
  email: z.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  device: z.string()
    .trim()
    .min(1, "Please specify your device")
    .max(100, "Device name must be less than 100 characters"),
  application: z.string()
    .trim()
    .min(1, "Please specify your application")
    .max(100, "Application name must be less than 100 characters"),
  macAddress: z.string()
    .trim()
    .max(17, "MAC address must be 17 characters or less")
    .regex(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/, "Invalid MAC address format (e.g., 00:1A:2B:3C:4D:5E)")
    .optional()
    .or(z.literal("")),
  adultChannels: z.boolean().default(false),
});

type NewCustomerFormValues = z.infer<typeof newCustomerSchema>;

interface NewCustomerFormProps {
  price: string;
  isProcessing: boolean;
  onSubmit: (data: NewCustomerFormValues) => void;
}

export const NewCustomerForm = ({ price, isProcessing, onSubmit }: NewCustomerFormProps) => {
  const form = useForm<NewCustomerFormValues>({
    resolver: zodResolver(newCustomerSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      device: "",
      application: "",
      macAddress: "",
      adultChannels: false,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name *</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number (whatsapp) *</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+1 234 567 8900"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address *</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john.doe@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="device"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Which Device are you using? *</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., Smart TV, Android Box, Fire Stick"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="application"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Which Application are you using? *</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., IPTV Smarters, TiviMate, Perfect Player"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="macAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your MAC Address? (optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="00:1A:2B:3C:4D:5E"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="adultChannels"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Adult Channels (optional)
                </FormLabel>
              </div>
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
              Complete Order - ${price}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

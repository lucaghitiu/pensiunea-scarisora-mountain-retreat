import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Users } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Numele trebuie să conțină cel puțin 2 caractere").max(100),
  email: z.string().email("Email invalid").max(255),
  phone: z.string().min(10, "Telefon invalid").max(20),
  checkIn: z.string().min(1, "Selectați data sosirii"),
  checkOut: z.string().min(1, "Selectați data plecării"),
  guests: z.string().min(1, "Selectați numărul de persoane"),
  message: z.string().max(1000, "Mesajul este prea lung").optional(),
});

const ReservationForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsSubmitted(true);
    toast({
      title: "Rezervare trimisă!",
      description: "Vă mulțumim! Vă vom contacta în cel mai scurt timp pentru confirmarea rezervării.",
    });
    form.reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="rezervare" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Formular de rezervare
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Completați formularul și vă vom contacta pentru confirmare
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-xl p-8 md:p-12">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Calendar className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                Vă mulțumim pentru cererea dumneavoastră!
              </h3>
              <p className="text-lg text-muted-foreground font-body">
                Vă vom contacta în cel mai scurt timp pentru confirmarea rezervării.
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">Nume complet *</FormLabel>
                      <FormControl>
                        <Input placeholder="Ion Popescu" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="email@exemplu.ro" {...field} />
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
                        <FormLabel className="font-body">Telefon *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="0712 345 678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="checkIn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Data sosire *</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="checkOut"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Data plecare *</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Nr. persoane *</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" placeholder="2" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">Mesaj (opțional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Mențiuni speciale, preferințe camere, întrebări..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Trimite cererea de rezervare
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;

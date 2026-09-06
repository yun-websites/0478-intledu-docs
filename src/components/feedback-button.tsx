import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export function FeedbackButton({ extraButtonProps }: { extraButtonProps?: React.ComponentProps<typeof Button> }) {
    return (
        <Dialog>
            <DialogTrigger
                render={
                    <Button variant="outline" {...extraButtonProps}>
                        Having Trouble?
                    </Button>
                }
            />
            <DialogContent className="max-w-lg! p-8">
                <DialogHeader>
                    <DialogTitle>Send Feedback</DialogTitle>
                    <DialogDescription>
                        Your feedback is important to me! Please let me know your thoughts, suggestions, or any issues you
                        encountered while using my website. I value your input and strive to improve your experience.
                        <br />
                        <br />
                        Currently online feedback is not available, but you can still send me an email or Teams messae at{" "}
                        <a href="mailto:jim.lin@rqssfz.onmicrosoft.com">jim.lin@rqssfz.onmicrosoft.com</a>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

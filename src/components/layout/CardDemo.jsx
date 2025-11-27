import { Card } from "../common/CardLayout"
import { CardHeader } from "../common/CardLayout"
import { CardDescription } from "../common/CardLayout"
import { CardTitle } from "../common/CardLayout"
import { CardContent } from "../common/CardLayout"
import { CardFooter } from "../common/CardLayout"
export function CardDemo() {
    Card.Header = CardHeader;
    Card.Description = CardDescription;
    Card.Title = CardTitle;
    Card.Content = CardContent;
    Card.Footer = CardFooter;
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                [1, 2, 3].map((i) => {
                    return (<Card key={i} className="hover:shadow-xl transition-shadow">
                        <Card.Header>
                            <Card.Title>Basic Card</Card.Title>
                            <Card.Description>This is a simple card with header and content</Card.Description>
                        </Card.Header>
                        <Card.Content>
                            <p className="text-gray-700">
                                This is the card content. You can put any content here including text, images, or other components.
                            </p>
                        </Card.Content>
                    </Card>)
                })
            }
        </div>

    )
}
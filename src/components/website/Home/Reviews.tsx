import { memo } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

import { reviews } from '@/lib/reviews';

const Reviews = memo(function Reviews() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-4">Hear It from Our Happy Patients</h2>
      <p className="text-center text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-12">
        Discover why our patients trust us with their smiles, time and again.
      </p>
      <div className="flex flex-wrap justify-center items-center">
        {reviews.map((review) => (
          <div key={review.author} className="w-full md:w-1/2 lg:w-1/3 lg:max-w-[24rem] p-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{review.author}</CardTitle>
                <CardDescription>{review.date}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground min-h-[6em]">{review.text}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Reviews;

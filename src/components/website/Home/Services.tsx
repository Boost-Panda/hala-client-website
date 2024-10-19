import { memo } from 'react';
import { services } from '@/lib/services';
import { Card, CardContent, CardHeader, CardImage, CardTitle } from '@/components/ui/card';

const Services = memo(() => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-4">You&apos;re here because you want the best</h2>
      <p className="text-center text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-12">
        And we are here to deliver.
      </p>

      <div className="flex flex-wrap justify-center items-center">
        {services.map((service) => (
          <div key={service.name} className="w-full md:w-1/2 xl:w-1/3 p-4 lg:p-6">
            <Card>
              <CardImage
                src={service.image}
                alt={service.name}
                width={400}
                height={500}
                className="aspect-[2/1.4] object-cover"
              />
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="md:min-h-[14em] lg:min-h-[10rem] xl:min-h-[14rem]">{service.description}</CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
});

Services.displayName = 'Services';

export default Services;

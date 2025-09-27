import React from 'react';
import {
  EventsRoot,
  EventsHeader,
  EventsGrid,
  EventCard,
  EventImage,
  EventCardContent,
  EventTitle,
  EventMeta,
  EventButton,
  EventsNavButton,
} from '../styles/EventsSection.styles';
import eventsContent from '../content/eventsSectionContent';

const EventsSection = () => (
  <EventsRoot>
    <EventsHeader>{eventsContent.title}</EventsHeader>
    <EventsGrid>
      {eventsContent.events.map((event, idx) => (
        <EventCard key={idx} elevation={3}>
          <EventImage src={event.image} alt={event.title} />
          <EventCardContent>
            <EventTitle>{event.title}</EventTitle>
            <EventMeta>
              {event.location} • {event.date}
            </EventMeta>
            <EventButton variant="contained" color="warning">
              {event.button}
            </EventButton>
          </EventCardContent>
        </EventCard>
      ))}
    </EventsGrid>
    <EventsNavButton variant="contained" color="warning" disabled>
      {eventsContent.navButton}
    </EventsNavButton>
  </EventsRoot>
);

export default EventsSection;
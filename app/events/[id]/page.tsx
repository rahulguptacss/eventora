import Header from '../../components/Header/page'
import Footer from '../../components/Footer/page'
import Breadcrumb from '../../components/Breadcrumb/page'
import EventDetail from './EventDetailClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Detail - Eventora',
  description: 'View the details of our upcoming event',
}

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <>
      <Header />
      <Breadcrumb 
        title="Event Detail" 
        parentTitle="Events"
        parentHref="/events"
        currentTitle="Event Detail"
      />
      <main>
        <EventDetail id={resolvedParams.id} />
      </main>
      <Footer />
    </>
  )
}

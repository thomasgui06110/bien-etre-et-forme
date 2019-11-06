<?php

namespace App\Controller;

use App\Repository\InvoiceRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class InvoicesController extends AbstractController
{
    /**
     * @Route(
     *  path="api/stats",
     *  name="nbAdherents",
     *  methods={"GET"},
     *  defaults={
     *      "_controller"="\app\controller\InvoicesController::nbAdherentsAnnee",
     *      "_api_ressource_class"="App\Entity\Invoice",
     *      "_api_item_operation_name"="getnbAdherents"
     * }
     * )
     */
    public function nbAdherentsAnnee(InvoiceRepository $repo)
    {
        $nbAdherents = $repo->nbAdherents();
        return $this->json($nbAdherents);
    }

    /**
     * @Route(
     *  path="api/invoices/sum",
     *  name="montant_par_adherent",
     *  methods={"GET"},
     *  defaults={
     *      "_controller"="\app\controller\InvoicesController::nbAdherentsAnnee",
     *      "_api_ressource_class"="App\Entity\Invoice",
     *      "_api_item_operation_name"="totalInvoiceByAdherent"
     * }
     * )
     */
    public function totalInvoiceByAdherent(InvoiceRepository $repo)
    {
        $totalInvoice = $repo->totalInvoiceByAdherent();
        return $this->json(($totalInvoice));
    }
}
